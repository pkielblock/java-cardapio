package dev.pkielblock.cardapio.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController()
@RequestMapping("/food")
public class foodController {

    @GetMapping
    public void getAll() {
        
    }
}
