export default function gtagEvent(action, category, label) {

    if (typeof dataLayer != 'undefined') {
        gtag('event', action, {
          'event_category': category,
          'event_label': label
        });
    } else {
        console.log(action, category, label);
    }
   
}
