/* IMPORTS */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Article from './Article';
import { articles } from '../../mockArticles';

/* TESTS */
test('expect the article to exist', () => {
  // render the articles with require articles proeprty.
  // get by test id the virtual article container
  // check that it exists and that it is the only top level element in the parent div container.
  const testArticles = ['a', 'b', 'c'];
  const { container } = render(<Article articles={testArticles} />);
  const virtualArticleContainer = document.getElementById('ArticleContainer');

  expect(virtualArticleContainer).toBeTruthy();
  expect(container.children.length).toStrictEqual(1);
});

test('display content of first item in the articles section', () => {
  // render out the article section with the the data filed with an array of fake articles.
  // get by test id the article.
  // get the first element whcih should be the first article on display
  // check that that vritualArticle text content is equal to the first article.
  render(<Article articles={articles} />);

  const virtualArticleTitle = document.getElementById('ArticleTitle');
  const virtualArticleContent = document.getElementById('ArticleContent');
  const [{ title, content }] = articles;

  expect(virtualArticleTitle.textContent).toStrictEqual(title);
  expect(virtualArticleContent.textContent).toStrictEqual(content);
});

test('articles has buttons in the article are correctly rendered', () => {
  // render out the article section with the tet data filed with an array of fake articles.
  // get by test id both the firwards and backwards article shift button.
  // check that the forwards button should be truthy as you can therefore move forward.
  // Since there is not article to back to the starting button should beNull
  render(<Article articles={articles} />);

  const virtualShiftArticleForwardsButton = document.getElementById('ShiftArticleForwardsButton');
  const virtualShiftArticleBackwardsButton = document.getElementById('ShiftArticleBackwardsButton');

  expect(virtualShiftArticleForwardsButton).toBeTruthy();
  expect(virtualShiftArticleBackwardsButton).toBeNull();
});

test('article buttons shift the articles forward and backwards', () => {
  // Render out the article section with the tet data filed with an array of fake articles.
  // Get the starting Article and the next Article after than on from testArticles array.
  // Get by test id the Article element and the shift article forwards and backwards button.
  // Check that the startingArticles matchs teh virtual Articles text Cotnent.
  // at the last article the forwards button should be Null.
  render(<Article articles={articles} />);

  const [startingArticle, secondArticle, finalArticle] = articles;
  const virtualArticle = document.getElementById('Article');
  const virtualShiftArticleForwardsButton = () => document.getElementById('ShiftArticleForwardsButton');
  const virtualShiftArticleBackwardsButton = () => document.getElementById('ShiftArticleBackwardsButton');

  function renderObjectToBe({ title, content }: { title: string, content: string}) {
    const { container } = render(
      <>
        <h1 id="ArticleTitle">{title}</h1>
        <span id="ArticleContent">{content}</span>
      </>,
    );
    return container.children;
  }

  expect(virtualShiftArticleBackwardsButton()).toBeNull();
  expect(virtualArticle.children).toStrictEqual(renderObjectToBe(startingArticle));

  fireEvent.click(virtualShiftArticleForwardsButton());

  expect(virtualArticle.children).toStrictEqual(renderObjectToBe(secondArticle));
  expect(virtualShiftArticleBackwardsButton()).toBeTruthy();

  fireEvent.click(virtualShiftArticleForwardsButton());

  expect(virtualArticle.children).toStrictEqual(renderObjectToBe(finalArticle));

  fireEvent.click(virtualShiftArticleBackwardsButton());

  expect(virtualArticle.children).toStrictEqual(renderObjectToBe(secondArticle));
  expect(virtualShiftArticleForwardsButton()).toBeTruthy();

  fireEvent.click(virtualShiftArticleBackwardsButton());

  expect(virtualArticle.children).toStrictEqual(renderObjectToBe(startingArticle));
  expect(virtualShiftArticleBackwardsButton()).toBeNull();
});

test('should return a number counting the articles ', () => {
  render(<Article articles={articles} />);

  const virtualArticleCounter = document.getElementById('ArticleCounter');
  const virtualShiftArticleForwardsButton = () => document.getElementById('ShiftArticleForwardsButton');
  const virtualShiftArticleBackwardsButton = () => document.getElementById('ShiftArticleBackwardsButton');

  expect(virtualArticleCounter.textContent).toStrictEqual('1/3');

  fireEvent.click(virtualShiftArticleForwardsButton());

  expect(virtualArticleCounter.textContent).toStrictEqual('2/3');

  fireEvent.click(virtualShiftArticleBackwardsButton());

  expect(virtualArticleCounter.textContent).toStrictEqual('1/3');
});
