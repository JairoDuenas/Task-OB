import { Observable } from "rxjs"

export const getNumbers = new Observable(subscriber => {
  // we emit values:

  subscriber.next(1); // emits 1
  subscriber.next(2); // emits 2
  subscriber.next(3); // emits 3
  setTimeout(() => {
    subscriber.next(4); // emits 4
    subscriber.complete(); // Finally, the Observable completes & finishes 
  }, 1000); // waits 1s

})
