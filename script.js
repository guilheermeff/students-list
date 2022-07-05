// Variables 

let option
let studentList = [ ]

// menu

while(option != 3) {
  
  let student = new Object()
  let average
  
  option = Number(prompt(`
  
  Olá usuário! Digite a opção desejada
  
  1. Cadastrar um Estudante
  2. Mostrar a Lista de estudantes com suas respectivas médias
  3. Sair do programa
  
  `))
  
  switch(option) {
    
    case 1: {
      
      function calcAverage(grade1, grade2) {
        
        let average = ((grade1 + grade2) / 2).toFixed(2)
        return average      
      }
      student.studentName = prompt("Insira o nome do Estudante: ") 
      student.grade1 = Number(prompt("Insira a primeira nota: ")) 
      student.grade2 = Number(prompt("Insira a segunda nota: "))
      
      average = calcAverage(student.grade1, student.grade2)
      student.getAverage = average
      
      studentList.push(student)
      break
    }
    
    case 2: {
      
      if(studentList.length == 0){
        alert("Não existem alunos cadastrados!")
      } else {
        for(let index = 0; index < studentList.length; index++) {
          
          if(studentList[index].getAverage < 7) {
            alert(`O Aluno(a) ${studentList[index].studentName} obteve média: ${studentList[index].getAverage} \n
            Não foi dessa vez, ${studentList[index].studentName}! Tente novamente!`)
          } else {
            alert(`O Aluno(a) ${studentList[index].studentName} obteve média: ${studentList[index].getAverage} \n
            Parabéns, ${studentList[index].studentName}! Você foi aprovado(a)!`)
          }
        }
      }
      break
    }
    
    case 3: {
      alert("Sair do programa, tchau!")
      break
    }

    default: {
      alert("Opção inválida, tente novamente!")
    }
  }
  
  console.log(student)
}

console.log(studentList)

