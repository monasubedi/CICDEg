import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import Crashes from 'appcenter-crashes'
import Analytics from 'appcenter-analytics'

const App = () => {
    return (
        <View style={styles.center}>
            {/* <Button title='Track event' onPress={() => Analytics.trackEvent('test')} /> */}
            <Text>Hello</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

})

export default App