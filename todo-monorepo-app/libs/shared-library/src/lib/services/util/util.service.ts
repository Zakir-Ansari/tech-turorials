import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  getTimeDifference(dateString: string): string {
    const givenDate = new Date(dateString);
    const currentDate = new Date();
    const diffInMilliseconds = currentDate.getTime() - givenDate.getTime();

    // Calculate time differences in various units
    const minutes = Math.floor(diffInMilliseconds / (1000 * 60));
    const hours = Math.floor(diffInMilliseconds / (1000 * 60 * 60));
    const days = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));

    if (minutes < 60) {
      return `${minutes} minute${minutes !== 1 ? 's' : ''}`;
    } else if (hours < 24) {
      return `${hours} hour${hours !== 1 ? 's' : ''}`;
    } else {
      return `${days} day${days !== 1 ? 's' : ''}`;
    }
  }
}
