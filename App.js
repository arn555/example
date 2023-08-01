import { StyleSheet, Text, View,  ScrollView} from 'react-native'
import React, {useEffect, useState} from 'react'
import axios from 'axios';

const App = () => {

    const [list, setList] = useState([])

    useEffect ( () => {
        getListTeacher();
    }, [])

    const getListTeacher = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => setList(res.data))
        .catch(error => console.log(error))
    }

  return (
    <View style={styles.container}>
      <Text style={styles.txtMain}>User List</Text>
      <ScrollView>
        {list.map((item,index)=> {
            return(
                <View key={index}>
                    <Text>{item.title}</Text>
                </View>
            )
        })}

      </ScrollView>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    txtMain: {
        fontSize: 16,
        fontWeight: "bold"
    }

})