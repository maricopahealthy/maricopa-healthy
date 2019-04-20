/**
 * Section is a generator function for producing 'section' elements that adhere to the react-native SectionList requirements.
 * The returned section will have a sequential id property.
 *
 * @type {function(title, data, renderItem): {id: number, title: string, data: Array<T>, renderItem: Function}}
 * @param {string} title - the title to be used as the section header.
 * @param {Array<T>} data - the data to display for the corresponding section.
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