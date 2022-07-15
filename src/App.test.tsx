import React from 'react';
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { GET_RELATED_TOPICS } from './graphql/queries';
import App from './App';

const mocks = [{
  request: {
    query: GET_RELATED_TOPICS,
    variables: {
      name: 'react',
    },
  },
  result: {
    data: {
      topic: {
        id: "MDU6VG9waWNyZWFjdA==",
        name: "react",
        relatedTopics: [
          {
            id: "MDU6VG9waWNhbmd1bGFy",
            name: "angular",
            stargazerCount: 43960,
          },
          {
            id: "MDU6VG9waWNyZWFjdC1uYXRpdmU=",
            name: "react-native",
            stargazerCount: 25071,
          },
          {
            id: "MDU6VG9waWN2dWU=",
            name: "vue",
            stargazerCount: 49196,
          }
        ],
      }
    }
  }
}];

describe('App', () => {
  it('Renders correctly', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App  />
      </MockedProvider>
    );

    expect(screen.getAllByRole('heading')[0]).toHaveTextContent('Search topic:');
    expect(screen.getAllByRole('heading')[1]).toHaveTextContent('Related topics:');
  });

  it('Topic correctly retrieved', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App  />
      </MockedProvider>
    );

    expect(await screen.findByText("Loading...")).toBeInTheDocument();
    expect(await screen.findByText("angular")).toBeInTheDocument();
    expect(await screen.findByText("react-native")).toBeInTheDocument();
    expect(await screen.findByText("vue")).toBeInTheDocument();
  });
})