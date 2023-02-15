
const students: String[] = ['Guilherme', 'Pedro'];

class StudentService {

    public getAll(): String[] {
        return students;
    }

    public getStudentById(studentIndex: string) {

        return students[Number.parseInt(studentIndex)];
    }

    public save(studentName: String) {

        students.push(studentName);

        return students;
    }

    public updateStudent(index: string, studentName: String) {

        students[Number.parseInt(index)] = studentName;

        return students;
    }

    public deleteStudent(index: string) {

        students.splice(Number.parseInt(index), 1); // Remove 1 elemento a partir do índice 'index'

        return students;
    }
}

export const studentService = new StudentService();