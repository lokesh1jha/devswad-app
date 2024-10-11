import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
// import ProductCard from './ProductCard';
import { getProducts } from '../utils/api';
import ProductCard from './ProductCard';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

interface ProductListProps {
    featured?: boolean;
    category?: string;
    navigation: NavigationProp<ParamListBase>;
}

export default function ProductList({ featured, category, navigation }: ProductListProps) {
    const products = getProducts({ featured, category });

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={({ item }) => <ProductCard product={item} navigation={navigation} />}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                columnWrapperStyle={styles.row}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flex: 1,
        justifyContent: 'space-around',
    },
    container: {
        // Add any styles needed for the container
    },
});