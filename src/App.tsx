import React, {useState} from 'react';
import { useQuery } from '@apollo/client';
import { GET_RELATED_TOPICS } from './graphql/queries';
import Topic from './components/Topic';
import type { TopicProps } from './components/Topic';

export default function App() {
  const [topicName, setTopicName] = useState<string>('react');
  const { loading, error, data } = useQuery(GET_RELATED_TOPICS, {
    variables: {
      name: topicName,
    }
  });

  return (
    <div className="App">
      {data.topic.relatedTopics.map((relatedTopic: TopicProps) => (
        <Topic name={relatedTopic.name} stargazerCount={relatedTopic.stargazerCount} />
      ))}
    </div>
  );
}
