var xmlParser1 = new DOMParser();
const stringXML = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

const result = xmlParser.parseFromString(stringXML,"text/xml");
const list1 = result.querySelector("list");
const st1 = result.querySelectorAll("student");

const name1 = st1[0].querySelector("name");
const atr1 = name1.getAttribute("lang");
const f1 = name1.querySelector("first"); 
const s1 = name1.querySelector("second");
const age1 = st1[0].querySelector("age");
const prof1 = st1[0].querySelector("prof");

const name2 = st1[1].querySelector("name");
const atr2 = name2.getAttribute("lang");
const f2 = name2.querySelector("first") ;
const s2 = name2.querySelector("second");
const age2 = st1[1].querySelector("age");
const prof2 = st1[1].querySelector("prof");


const resultjs = [
      
  {name: f1.textContent+' '+s1.textContent,
    age: age1.textContent, prof: prof1.textContent, lang: atr1}
,
          {
    name: f2.textContent+' '+s2.textContent,
    age: age2.textContent,prof: prof2.textContent, lang: atr2}]
      
console.log(resultjs)
/*
{
    list: [
      { name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },
      { name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },
    ]
  }
*/