
package com.studentData.Bean;



import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "productTable")
public class ProductDataBean {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="productId")
	private long productId;
	@Column(name="productName")
	private String productName;
	@Column(name="productPrice")
	private int productPrice;
	@Column(name="imagePath")
	private String imagePath;

	

	public String getImagePath() {
		return imagePath;
	}

	public void setImagePath(String imagePath) {
		this.imagePath = imagePath;
	}

	public ProductDataBean( String productName, long productId, int productPrice,String imagePath) {
		super();
		this.productId = productId;
		this.productName = productName;
		this.productPrice = productPrice;  
		this.imagePath = imagePath;
	}
	
	public ProductDataBean( ) {
		
	}

	public long getProductId() {
		return productId;
	}

	public void setProductId(long productId) {
		this.productId = productId;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public int getProductPrice() {
		return productPrice;
	}

	public void setProductPrice(int productPrice) {
		this.productPrice = productPrice;
	}
	

}