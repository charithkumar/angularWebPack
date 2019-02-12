package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.productData.Dao.productDataDao;
import com.studentData.Bean.ProductDataBean;

	
@RestController
public class ProductController {

	@Autowired
	productDataDao productDataDao;

	@ResponseBody
	@RequestMapping(value = "/getAllProducts", method = RequestMethod.GET,produces= {"application/json"})
	public ResponseEntity<List<ProductDataBean>> getProducts() {

		List<ProductDataBean> studentDataBean = productDataDao.getAllProducts();
		return new ResponseEntity<List<ProductDataBean>>(studentDataBean, HttpStatus.OK);

	}
	
	@ResponseBody
	@RequestMapping(value = "/productDetails/{id}", method = RequestMethod.GET,produces= {"application/json"})
	public ResponseEntity<ProductDataBean> getProducts(@PathVariable("id") long id) {

		ProductDataBean studentDataBean = productDataDao.getProductById(id);
		return new ResponseEntity<ProductDataBean>(studentDataBean, HttpStatus.OK);

	}

	@RequestMapping(value = "/addProduct", method = RequestMethod.POST ,consumes ={"application/json"},produces ={"application/json"})
	public ResponseEntity<String> saveProduct(@RequestBody ProductDataBean product) {
		productDataDao.addProduct(product);
		return new ResponseEntity<String>("Product saved successfully", HttpStatus.OK);
	}

	@RequestMapping(value = "/deleteProduct/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<String> delete(@PathVariable long id) {
		productDataDao.deleteProduct(id);
		return new ResponseEntity<String>("Product deleted successfully", HttpStatus.OK);
	}
	/*
	 * @RequestMapping(value = "/update/{id}", method = RequestMethod.PUT) public
	 * ResponseEntity updateProduct(@PathVariable Integer id, @RequestBody Product
	 * product) { Product storedProduct = ProductDataBean.getProductById(id);
	 * storedProduct.setDescription(product.getDescription());
	 * storedProduct.setImageUrl(product.getImageUrl());
	 * storedProduct.setPrice(product.getPrice());
	 * ProductDataBean.saveProduct(storedProduct); return new
	 * ResponseEntity("Product updated successfully", HttpStatus.OK); }
	 */

}