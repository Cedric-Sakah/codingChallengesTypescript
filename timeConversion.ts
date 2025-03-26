// Problem Statement: Time Format Conversion

// We are tasked with converting a time string from 12-hour 
// AM/PM format to 24-hour military format. The conversion must 
// maintain all time components while adjusting the hour 
// value according to specific rules.

// Conversion Rules:

// AM Times:

// 12:00 AM becomes 00:00 (midnight)

// All other AM times keep the same hour value (e.g., 9:30 AM → 09:30)

// PM Times:

// 12:00 PM remains 12:00 (noon)

// All other PM times add 12 to the hour (e.g., 5:45 PM → 17:45)

function timeConversion(s: string): string {
    const period = s.slice(-2);
    const time = s.slice(0, -2);
    const [hours, minutes, seconds] = time.split(':');
    
    let militaryHours: string;
    if (period === 'AM') {
        militaryHours = hours === '12' ? '00' : hours;
    } else {
        militaryHours = hours === '12' ? '12' : String(Number(hours) + 12);
    }
    
    const paddedHours = militaryHours.padStart(2, '0');
    
    return `${paddedHours}:${minutes}:${seconds}`;
}
