import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DeleteConfirmModal from "./DeleteConfirmModal";
import ProductsRow from "./ProductsRow";

const ManageProducts = () => {
    const [deletingProduct, setDeletingProduct] = useState(null);
    // const [tools] = useTools();

    const {
        data: tools,
        isLoading,
        refetch,
    } = useQuery("tools", () =>
        fetch("http://localhost:4000/tools").then((res) => res.json())
    );

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div>
            <h2 className="text-2xl mb-4">Manage Products {tools.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tools.map((tool, index) => (
                            <ProductsRow
                                key={index}
                                tool={tool}
                                index={index}
                                refetch={refetch}
                                setDeletingProduct={setDeletingProduct}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
            {deletingProduct && (
                <DeleteConfirmModal
                    refetch={refetch}
                    deletingProduct={deletingProduct}
                    setDeletingProduct={setDeletingProduct}
                />
            )}
        </div>
    );
};

export default ManageProducts;
