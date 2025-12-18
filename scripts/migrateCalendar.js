import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vxystfuikmupyfckfzld.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4eXN0ZnVpa211cHlmY2tmemxkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYwMDk3MzMsImV4cCI6MjA4MTU4NTczM30.cMvVcZHPS9Wsdi-I9SdSVWwqSTVEg-vxPFEgEfiDjHs'

const supabase = createClient(supabaseUrl, supabaseKey)

const parseDate = (dateStr) => {
    if (!dateStr) return null;
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return null;
    // Return YYYY-MM-DD
    return d.toISOString().split('T')[0];
}

async function migrate() {
    console.log('Starting migration...');

    // 1. Get all destinations
    const { data: destinations, error } = await supabase
        .from('destinations')
        .select('*');

    if (error) {
        console.error('Error fetching destinations:', error);
        return;
    }

    console.log(`Found ${destinations.length} destinations.`);
    const calendarEntries = [];

    for (const dest of destinations) {
        // Determine capacity
        const spots = dest.max_travelers || dest.group_size || 10;

        // Case 1: Package with single start date
        if (dest.is_popular_package && dest.start_date) {
            const date = parseDate(dest.start_date);
            if (date) {
                calendarEntries.push({
                    destination_id: dest.id,
                    date: date,
                    total_spots: spots,
                    booked_spots: 0,
                    price: dest.price,
                    status: 'active'
                });
            }
        }
        // Case 2: Standard destination with available_dates array
        else if (dest.available_dates && Array.isArray(dest.available_dates)) {
            for (const dateStr of dest.available_dates) {
                const date = parseDate(dateStr);
                if (date) {
                    calendarEntries.push({
                        destination_id: dest.id,
                        date: date,
                        total_spots: spots,
                        booked_spots: 0,
                        price: dest.price,
                        status: 'active'
                    });
                }
            }
        }
    }

    if (calendarEntries.length > 0) {
        console.log(`Inserting ${calendarEntries.length} calendar entries...`);
        const { error: insertError } = await supabase
            .from('calendar')
            .insert(calendarEntries);

        if (insertError) {
            console.error('Error inserting calendar entries:', insertError);
        } else {
            console.log('Migration successful!');
        }
    } else {
        console.log('No calendar entries to insert.');
    }
}

migrate();
