const SectionArray = (data) => {
  const sectionArr = [];

  for (let i = 0; i < data.length; i++) {
    sectionArr.push({id: i, data: data[i].trim()});
  }
  return sectionArr;
};

export default SectionArray;