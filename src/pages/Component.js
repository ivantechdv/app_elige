import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import md5 from 'js-md5';
const Component = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const publicKey = '1e84202a837177473a0fb3a57c6ccc6b';
const privateKey = 'febb34558f90d402245caffbabedbeb80310d782';
const timestamp = Date.now().toString();
const hash = md5(timestamp + privateKey + publicKey);
const url = `https://gateway.marvel.com/v1/public/characters?apikey=${publicKey}&ts=${timestamp}&hash=${hash}`;
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        
        const jsonData = await response.json();
        console.log("response", response);
        setData(jsonData.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image
        source={{ uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }}
        style={styles.image}
      />
      <Text style={styles.title}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    flex: 1,
    margin: 4,
    alignItems: 'center',
  },
  title: {
    marginTop: 5,
    fontSize: 12,
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10,
  },
});

export default Component;
