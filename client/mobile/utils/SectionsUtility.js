/**
 * Section is a generator function for producing 'section' elements that adhere to the react-native SectionList requirements.
 * Section takes an array of objects and calls the renderItem function once for every object in the array.
 * Properties on the object are available as properties under 'item'.
 * The returned section will have a sequential id property.
 *
 * @type {function(title, data, renderItem): {id: number, title: string, data: Array<T>, renderItem: Function}}
 * @param {string} title - the title to be used as the section header.
 * @param {Array<object>} data - the data to display for the corresponding section.
 * @param {function} renderItem - the formatted components to render as the section.
 */
const Section = (function() {
  let _id = 0;

  return function(title, data, renderItem) {
    return {
      id: _id++,
      title,
      data,
      renderItem,
    }
  };
})();

export default Section;