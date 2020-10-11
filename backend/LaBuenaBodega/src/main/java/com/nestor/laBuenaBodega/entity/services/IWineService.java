package com.nestor.laBuenaBodega.entity.services;

import java.util.List;


import com.nestor.laBuenaBodega.entity.models.Wine;

public interface IWineService {

	List<Wine> getAllWines();

	Wine findWineById(int idWine);

	void addWine(Wine wine);

	void deleteWine(int idWine);

	void updateWine(int idWine, Wine wine);
	
	


	

}
