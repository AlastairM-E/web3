/* IMPORTS */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Article from './Article';

/* TESTS */
test('expect the article to exist', () => {
  // render the articles with require articles proeprty.
  // get by test id the virtual article container
  // check that it exists and that it is the only top level element in the parent div container.
  const testArticles = ['a', 'b', 'c'];
  const { container, getByTestId } = render(<Article articles={testArticles} />);
  const virtualArticleContainer = getByTestId('ArticleContainer');

  expect(virtualArticleContainer).toBeTruthy();
  expect(container.children.length).toStrictEqual(1);
});

test('display content of first item in the articles section', () => {
  // render out the article section with the the data filed with an array of fake articles.
  // get by test id the article.
  // get the first element whcih should be the first article on display
  // check that that vritualArticle text content is equal to the first article.
  const testArticles = ['a', 'b', 'c'];
  const { getByTestId } = render(<Article articles={testArticles} />);

  const virtualArticle = getByTestId('Article');
  const [articleToDisplay] = testArticles;

  expect(virtualArticle.textContent).toStrictEqual(articleToDisplay);
});

test('articles has buttons in the article', () => {
  // render out the article section with the tet data filed with an array of fake articles.
  // get by test id both the firwards and backwards article shift button.
  // check that both articles exist and so are truthy.
  const testArticles = ['a', 'b', 'c'];
  const { getByTestId } = render(<Article articles={testArticles} />);

  const virtualShiftArticleForwardsButton = getByTestId('ShiftArticleForwardsButton');
  const virtualShiftArticleBackwardsButton = getByTestId('ShiftArticleBackwardsButton');

  expect(virtualShiftArticleForwardsButton).toBeTruthy();
  expect(virtualShiftArticleBackwardsButton).toBeTruthy();
});

test('article buttons shift the articles forward and backwards', () => {
  // Render out the article section with the tet data filed with an array of fake articles.
  // Get the starting Article and the next Article after than on from testArticles array.
  // Get by test id the Article element and the shift article forwards and backwards button.
  // Check that the startingArticles matchs teh virtual Articles text Cotnent
  const testArticles = ['a', 'b', 'c'];
  const { getByTestId } = render(<Article articles={testArticles} />);

  const [startingArticle, nextArticle] = testArticles;
  const virtualArticle = getByTestId('Article');
  const virtualShiftArticleForwardsButton = getByTestId('ShiftArticleForwardsButton');
  const virtualShiftArticleBackwardsButton = getByTestId('ShiftArticleBackwardsButton');

  expect(virtualArticle.textContent).toStrictEqual(startingArticle);

  fireEvent.click(virtualShiftArticleForwardsButton);
  expect(virtualArticle.textContent).toStrictEqual(nextArticle);

  fireEvent.click(virtualShiftArticleBackwardsButton);
  expect(virtualArticle.textContent).toStrictEqual(startingArticle);
});
