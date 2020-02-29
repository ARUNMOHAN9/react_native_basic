import React from 'react';
import {Text, FlatList} from 'react-native';

const ListView = () => {

    const friends = [
        {age: '10'},
        {age: '20'},
        {age: '30'},
        {age: '40'},
        {age: '50'},
        {age: '60'},
        {age: '70'},
        {age: '80'},
        {age: '90'},
        {age: '200'}
    ]
    return(
        <FlatList data={friends}
        keyExtractor={ friend => friend.age}
            renderItem = {({item}) => <Text>{item.age}</Text>}
        />
    );
};

export default ListView;