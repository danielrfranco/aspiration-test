import React, {ChangeEvent, useState} from 'react';
import { useQuery } from '@apollo/client';
import { GET_RELATED_TOPICS } from './graphql/queries';
import Topic from './components/Topic';
import type { TopicProps } from './components/Topic';
import Stack from '@mui/material/Stack';
import OutlinedInput from '@mui/material/OutlinedInput';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import './App.css';

export default function App() {
  const [searchInputValue, setSearchInputValuer] = useState<string>('react');
  const [topicName, setTopicName] = useState<string>('react');
  const { loading, error, data } = useQuery(GET_RELATED_TOPICS, {
    variables: {
      name: topicName,
    }
  });

  if (error) return <div>Error! ${error.message}</div>;

  const handleTopicClick = (topicName: string) => {
    setTopicName(topicName);
  }

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {setSearchInputValuer(event.target?.value)}

  const handleSearchSubmit = () => {
    setTopicName(searchInputValue);
    setSearchInputValuer('');
  }

  return (
    <div className="App">
      <h1 className="topicName">
        Search topic: {topicName}
      </h1>
      <OutlinedInput
        id="outlined-adornment-password"
        value={searchInputValue}
        onChange={handleSearchChange}
        inputProps={{
          'aria-label': 'topic',
        }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="search topic"
              onClick={handleSearchSubmit}
              edge="end"
            >
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
      />

      <h3>Related topics:</h3>

      {loading ? <p>Loading...</p> : (

        data.topic.relatedTopics.length > 0 ? (
          <Stack direction="row" spacing={2}>
            {data.topic.relatedTopics.map((relatedTopic: TopicProps) => (
              <Topic key={relatedTopic.id} id={relatedTopic.id} name={relatedTopic.name} stargazerCount={relatedTopic.stargazerCount} onClick={() => handleTopicClick(relatedTopic.name)} />
            ))}
          </Stack>
        ) : <p>No related topics found</p>

      )}

    </div>
  );
}
