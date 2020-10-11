package com.nestor.laBuenaBodega.controler;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;


import com.nestor.laBuenaBodega.entity.models.Wine;
import com.nestor.laBuenaBodega.entity.services.IWineService;



@CrossOrigin(origins = "http://localhost:8100")
@RestController
public class WineController {

	@Autowired
	IWineService wineService;

	// Here are the end-points
	

	@GetMapping("/api/vinos")
	private List<Wine> getAllWines(){
		return wineService.getAllWines();
		
	}

	@GetMapping("/api/vinos/{idWine}")
	private Wine findWineById(@PathVariable(value = "idWine") int idWine){
			return wineService.findWineById(idWine);

	}
	
	@PostMapping("/api/vinos")

	private void addWine(Wine wine) {
			wineService.addWine(wine);
		
	}
	
	@CrossOrigin(origins = "http://localhost:8100")
	@DeleteMapping("/api/vinos/{idWine}")

	private void deleteWine(@PathVariable(value = "idWine") int idWine) {
			wineService.deleteWine(idWine);
		
	}
	
	@PutMapping("/api/vinos/{idWine}")
	private void updateWine(@PathVariable(value = "idWine") int idWine, Wine wine) {
			wineService.updateWine(idWine, wine);
		
	}
}
