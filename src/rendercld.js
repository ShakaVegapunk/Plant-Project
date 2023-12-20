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
  const itemId = event.currentTarget.dataset.itemId; 
  event.currentTarget.classList.toggle('green');
  const isGreen = event.currentTarget.classList.contains('green');
  localStorage.setItem(`id:${itemId}`, isGreen.toString());
}

function renderCalendar() {
  calendar(element, events, settings);

  const liElements = document.querySelectorAll('#caleandar li');

  liElements.forEach((liElement) => {
    const itemId =  uid();
    liElement.dataset.itemId = itemId;
    const storedValue = localStorage.getItem(`id:${itemId}`);
    
    if (storedValue === 'true') {
      liElement.classList.add('green');
    }

    liElement.addEventListener('click', handleLiClick);
  });
}
const uid = function(){
        return Date.now().toString(36) + Math.random().toString(36)
}

export { renderCalendar,};
