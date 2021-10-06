package pe.popehiflo.todolist.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import pe.popehiflo.todolist.model.Tarea;
import pe.popehiflo.todolist.repository.TareaRepository;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/tareas")
public class TareaController {

    @Autowired
    private TareaRepository repository;

    @GetMapping("")
    public List<Tarea> listAll() {
        List<Tarea> lista = repository.findAll();
        return lista;
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("")
    public Tarea create(@RequestBody Tarea tarea) {
        return repository.save(tarea);
    }

    @PutMapping("{id}")
    public Tarea update(@PathVariable String id, @RequestBody Tarea tarea) {
        Tarea tareaDB = repository
                .findById(id)
                .orElseThrow(RuntimeException::new);
        tareaDB.setNombre(tarea.getNombre());
        tareaDB.setRealizada(tarea.isRealizada());

        return repository.save(tareaDB);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("{id}")
    public void delete(@PathVariable String id) {
        Tarea tareaDB = repository
                .findById(id)
                .orElseThrow(RuntimeException::new);
        repository.delete(tareaDB);
    }
}
