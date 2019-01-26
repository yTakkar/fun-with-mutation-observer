import { UL, addAThing, removeLastThing, toggleType } from './utils'

addAThing();
removeLastThing();
// toggleType();

const observer = new MutationObserver((mutationList) => {
  mutationList.forEach(mutation => {
    if (mutation.type === 'childList' && mutation.addedNodes.length) {
      console.log('A child has been added');
    } 

    if (mutation.type === 'childList' && mutation.removedNodes.length) {
      console.log('A child has been removed');
    }
  })
})

observer.observe(UL, {
  attributes: true,
  childList: true,
  subtree: true
})