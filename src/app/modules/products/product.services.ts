import { Products } from './product.module';
import { TProduct } from './product.interface';
import QueryBuilder from '../../builder/QueryBuilder';
import { productSearchableFields } from './product.constant';

// Create a Stationery Product Services
const createProductIntoDB = async (productData: TProduct) => {
  const product = new Products(productData);
  const result = await product.save();
  return result;
};

const getAllProductIntoDB = async (query: Record<string, unknown>) => {
  const allProductQuery = new QueryBuilder(
    Products.find(),
    query,
  )
    .search(productSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();
  const result = await allProductQuery.modelQuery;
  const meta = await allProductQuery.countTotal();

  return {
    meta,
    result,
  };
};

// Get a Specific Stationery Product Services
const getSingleIntoDB = async (productId: string) => {
  const result = await Products.findById(productId);
  return result;
};

// Update a Stationery Product Services
const updateProductIntoDB = async (
  updateData: Partial<TProduct>,
  productId: string,
) => {
  try {

    const product = await Products.findById(productId);
    if (!product) {
      console.error("Product not found!");
      return null;
    }

    // Update product
    const result = await Products.findByIdAndUpdate(productId, updateData, {
      new: true, // Return the updated document
      runValidators: true, // Ensure validation rules are applied
    });

    if (!result) {
      console.error("Failed to update product");
      return null;
    }

    return result;
  } catch (error) {
    console.error("Error updating product:", error);
    throw new Error("Failed to update product");
  }
};

// Delete a Stationery Product Services
const deleteProductFromDB = async (productId: string, userEmail: string) => {

  const product = await Products.findById(productId);
  if (!product) {
    return false;
  }

  // Check if the product belongs to the requesting user
  if (product.user !== userEmail) {
    return false;
  }

  const result = await Products.findByIdAndDelete(productId);
  if (!result) {
    return false;
  }
  return result;
};

const getUserProject = async (query: Record<string, unknown>, userEmail: string) => {
  const blogQuery = new QueryBuilder(Products.find({ user: userEmail }), query)
    .search(["title"])
    .sort()
    .paginate()
    .fields();

  const data = await blogQuery.modelQuery;
  const meta = await blogQuery.countTotal();

  return {
    meta,
    data,
  };
};


// export Stationery Product Services
export const ProductsServices = {
  createProductIntoDB,
  getAllProductIntoDB,
  getSingleIntoDB,
  updateProductIntoDB,
  deleteProductFromDB,
  getUserProject
};
