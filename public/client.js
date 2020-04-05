/* 
Copyright 2018 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

  https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

const apiUrl = 'https://api.thecatapi.com/v1';
const tpl = document.querySelector('template').content;
const container = document.querySelector('ul');

function init () {
  fetch(apiUrl + '/images/search?limit=50')
  .then(response => response.json())
  .then(cats => {
    container.innerHTML = '';
    cats
      .map(cat => {
        const li = document.importNode(tpl, true);
        li.querySelector('img').src = cat.url;
        return li;
      }).forEach(li => container.appendChild(li));
  })
}

init();

document.querySelector('button').addEventListener('click', init);