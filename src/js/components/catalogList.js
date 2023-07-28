import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { updateBtnNames } from '../utils/updateBtnName.js';
import {
  searchForm,
  searchInput,
  errorContainer,
  btnClear,
  containerTui,
} from '../refs/catalogRefs';
import {
  createMarkupPage,
  createMarkupPageSearch,
} from '../markup/catalogMarkup';

// pagination

const optionsTui = {
  itemsPerPage: 20,
  visiblePages: 4,

  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn tui-num-page">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected tui-num-page">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{page}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}"></span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip tui-order-{{type}}-ellip">' +
      '<span class="tui-ico-ellip"></span>' +
      '</a>',
  },
};
const pagination = new Pagination(containerTui, optionsTui);
const page = pagination.getCurrentPage();

// REFS

pagination.on('afterMove', onClickPage);

async function onPageLoad() {
  try {
    const responseMovie = await createMarkupPage(page);

    pagination.reset(responseMovie.data.total_results);
    updateBtnNames(responseMovie.data.total_pages);
    containerTui.classList.remove('visuality-hidden');
  } catch (error) {
    console.log(error);
  }
}

async function onClickPage(event) {
  const currentPage = event.page;

  try {
    const responseMovie = await createMarkupPage(currentPage);
  } catch (error) {
    console.log(error);
  }
}

async function onClickPageSearch(event) {
  const currentPage = event.page;
  const searchQuery = searchInput.value.trim();
  try {
    const responseMovie = await createMarkupPageSearch(
      currentPage,
      searchQuery
    );
  } catch (error) {
    console.log(error);
  }
}

async function onSearchFormSubmit(event) {
  event.preventDefault();
  pagination.off('afterMove', onClickPage);
  containerTui.classList.add('visuality-hidden');
  const searchQuery = searchInput.value.trim();

  if (!searchQuery) {
    return alert('Введіть ваш запит');
  }

  try {
    const responseMovie = await createMarkupPageSearch(page, searchQuery);

    pagination.reset(responseMovie.data.total_results);
    updateBtnNames(responseMovie.data.total_pages);

    containerTui.classList.remove('visuality-hidden');

    pagination.on('afterMove', onClickPageSearch);

    if (responseMovie.data.total_results <= 20) {
      console.log(responseMovie.data.total_pages);
      containerTui.classList.add('visuality-hidden');
    }
    if (!responseMovie.data.total_results) {
      errorContainer.innerHTML = `<p class="catalog-error-text">OOPS...<br>
      We are very sorry!<br>
      We don’t have any results matching your search.</p>`;
    }
  } catch (error) {
    console.log(error.message);
  }
}

// WORKSPACE
window.addEventListener('load', onPageLoad);
searchForm.addEventListener('submit', onSearchFormSubmit);
btnClear.addEventListener('click', onBtnClearClick);

searchInput.addEventListener('input', onCatalogInput);

function onBtnClearClick(evt) {
  searchInput.value = '';
}

function onCatalogInput(evt) {
  if (evt.target.value.length === 0) {
    btnClear.style.display = 'none';
    return;
  }
  btnClear.style.display = 'block';
}
