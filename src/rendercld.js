import { calendar  } from '../src/calendar.js';
// import { addEvent, deleteEvent, editEvent, getEvent, getEvents , setLocalStorage, getLocalStorage} from './utils.js';

const element = document.querySelector('#caleandar');

const events = [
  {'Date': new Date(2023, 12, 12), 'Title': 'Doctor appointment at 3:25pm.', 'Link': function(){console.log('Reminder!');}},
  {'Date': new Date(2023, 12, 10), 'Title': 'New Garfield movie comes out!', 'Link': function(){alert("Better not miss the movie!");}},
  {'Date': new Date(2016, 12, 11), 'Title': '25 year anniversary', 'Link': function(){console.debug(document.getElementById('foo'));}},
];

const settings={
    // Color: '#999',                //(string - color) font color of whole calendar.
    // LinkColor: '#333',            //(string - color) font color of event titles.
    NavShow: true,                //(bool) show navigation arrows.
    NavLocation: element,          //(string - element) where to display navigation, if not in default position.
    DateTimeShow: true,           //(bool) show current date.
    DateTimeFormat: 'mmm, yyyy',  //(string - dateformat) format previously mentioned date is shown in.
    DatetimeLocation: '',         //(string - element) where to display previously mentioned date, if not in default position.
    EventClick: '',               //(function) a function that should instantiate on the click of any event. parameters passed in via data link attribute.
    EventTargetWholeDay: true,   //(bool) clicking on the whole date will trigger event action, as opposed to just clicking on the title.
    // DisabledDays: [],             //(array of numbers) days of the week to be slightly transparent. ie: [1,6] to fade Sunday and Saturday.
    ModelChange: null, // You need to provide a valid model or set it to null
};

function handleLiClick(event) {
  const dateKey = event.currentTarget.dataset.dateKey;
  event.currentTarget.classList.toggle('color');
  const isGreen = event.currentTarget.classList.contains('color');
  localStorage.setItem(`id:${dateKey}`, isGreen.toString());
}

function renderCalendar() {
  calendar(element, events, settings);

  const liElements = document.querySelectorAll('#caleandar li');

  liElements.forEach((liElement) => {
    const dateElement = liElement.querySelector('p.cld-number');
    
    if (dateElement) {
      const dateKey = dateElement.textContent.trim();
      liElement.dataset.dateKey = dateKey;
      
      const storedValue = localStorage.getItem(`id:${dateKey}`);
      
      if (storedValue === 'true') {
        liElement.classList.add('color');
      } else {
        liElement.classList.remove('color');
      }

      liElement.addEventListener('click', handleLiClick);
    }
  });
}


export { renderCalendar,};
