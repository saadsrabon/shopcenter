import React from 'react';
import data from '../../data/data.json';
import Product from '@/app/components/product';

const CategoryProducts = ({ params }) => {
    const { categoryName } = params;
    const itemsTo = data?.products;

    let category;

    if (categoryName === 'all') {
        category = data?.products;
    } else {
        category = data?.products.filter(item => item?.category === categoryName);
    }

    return (
        <div className="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
            {category?.map(item => (
                <Product key={item?.id} product={item} />
            ))}
        </div>
    );
};

export default CategoryProducts;
