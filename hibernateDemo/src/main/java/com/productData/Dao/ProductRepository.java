package com.productData.Dao;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.studentData.Bean.ProductDataBean;

@Repository
interface ProductRepository extends CrudRepository<ProductDataBean,Long> {

}

