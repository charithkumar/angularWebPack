
package com.productData.Dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.studentData.Bean.ProductDataBean;

@Service
public class productDataDao {

	@Autowired
	ProductRepository productRepository;

	public List<ProductDataBean> getAllProducts() {
		return (List<ProductDataBean>) productRepository.findAll();
	}

	public ProductDataBean getProductById(long id) {
		return productRepository.findById(id).get();
	}

	public void deleteProduct(long productId) {
		productRepository.deleteById(productId);
	}

	public void addProduct(ProductDataBean ProductDataBean) {
		productRepository.save(ProductDataBean);
	}

}