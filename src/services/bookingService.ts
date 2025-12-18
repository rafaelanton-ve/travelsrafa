import { supabase } from '../lib/supabase';

export interface BookingRequest {
    destinationId: number;
    date: string;
    travelerName: string;
    travelerEmail: string;
    spots: number;
    totalPrice: number;
}

export const bookingService = {
    getAvailability: async (destinationId: number, date: string) => {
        const { data, error } = await supabase
            .from('calendar')
            .select('*')
            .eq('destination_id', destinationId)
            .eq('date', date)
            .single();

        if (error) return null;
        return data;
    },

    createBooking: async (booking: BookingRequest) => {
        // 1. Get calendar entry
        const calendarEntry = await bookingService.getAvailability(booking.destinationId, booking.date);

        if (!calendarEntry) {
            throw new Error('Date not available');
        }

        if (calendarEntry.total_spots - calendarEntry.booked_spots < booking.spots) {
            throw new Error('Not enough spots available');
        }

        // 2. Insert booking
        const { data: bookingData, error: bookingError } = await supabase
            .from('bookings')
            .insert({
                calendar_id: calendarEntry.id,
                traveler_name: booking.travelerName,
                traveler_email: booking.travelerEmail,
                spots: booking.spots,
                total_price: booking.totalPrice,
                status: 'confirmed'
            })
            .select()
            .single();

        if (bookingError) throw new Error(bookingError.message);

        // 3. Update booked_spots (Naive approach, usually utilize database triggers or atomic update)
        // Using atomic increment
        /* 
           update calendar set booked_spots = booked_spots + X where id = Y 
        */
        // Supabase JS doesn't support atomic increment easily in update without rpc. 
        // We will do a direct update for now assuming low concurrency for this demo.

        await supabase.rpc('increment_booked_spots', {
            row_id: calendarEntry.id,
            count: booking.spots
        });

        // Fallback if RPC doesn't exist (we need to create it for correctness)

        return bookingData;
    }
};
