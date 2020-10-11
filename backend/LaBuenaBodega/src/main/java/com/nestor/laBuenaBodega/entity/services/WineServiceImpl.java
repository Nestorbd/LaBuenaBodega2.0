package com.nestor.laBuenaBodega.entity.services;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nestor.laBuenaBodega.entity.dao.IWineDao;
import com.nestor.laBuenaBodega.entity.models.Wine;

@Service
public class WineServiceImpl implements IWineService{

	@Autowired
	IWineDao wineDao;
	
	@Override
	public List<Wine> getAllWines() {
		return (List<Wine>) wineDao.findAll();
	}
	

	@Override
	public void addWine(Wine wine){
			wineDao.save(wine);
		
		
	}

	@Override
	public void deleteWine(int idWine) {
				wineDao.deleteById(idWine);
			
		
	}

	@Override
	public void updateWine(int idWine, Wine wine) {
			Optional<Wine> w = wineDao.findById(idWine);
			if(w.isPresent()) {
					wine.setId(idWine);
					wineDao.save(wine);
			}
	}
	
	@Override
	public Wine findWineById(int idWine) {
			Optional<Wine> w = wineDao.findById(idWine);
			if(w.isPresent()) {
				return w.get();
		}
			return null;
	
	}
	

}
