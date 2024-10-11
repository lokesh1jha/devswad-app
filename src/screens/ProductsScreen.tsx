import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Platform, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ButtonGroup } from 'react-native-elements';
import ProductList from '../components/ProductList';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

interface ProductsScreenProps {
    navigation: NavigationProp<ParamListBase>;
}
const categories = ['All', 'Spices', 'Pickles', 'Sweets'];

export default function ProductsScreen({ navigation }: ProductsScreenProps) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                    <View style={styles.contentContainer}>
                        <ButtonGroup
                            onPress={(index) => setSelectedIndex(index)}
                            selectedIndex={selectedIndex}
                            buttons={categories}
                            containerStyle={styles.buttonGroupContainer}
                            selectedButtonStyle={styles.selectedButton}
                        />
                        <ProductList
                            navigation={navigation}
                            category={categories[selectedIndex]}
                            featured={false}
                        />
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#F5F5DC',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    container: {
        flex: 1,
        backgroundColor: '#F5F5DC',
    },
    scrollViewContent: {
        flexGrow: 1,
    },
    contentContainer: {
        paddingTop: 20,
    },
    buttonGroupContainer: {
        marginBottom: 10,
        marginHorizontal: 10,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#F5F5DC',
    },
    selectedButton: {
        backgroundColor: '#2E8B57',
    },
});