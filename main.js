function Candidate(cNo, cName, doB, math, english, literature){
    this.cNo = cNo;
    this.cName = cName;
    this.doB = doB;
    this.math = math;
    this.english = english;
    this.literature = literature;    
}

Candidate.prototype.setCNo = function(cNo){
    this.cNo = cNo;
}
Candidate.prototype.getCNo =function(){
    return this.cNo;
}
Candidate.prototype.setCName = function(cName){
    this.cName = cName;
}
Candidate.prototype.getCName =function(){
    return this.cName;
}
Candidate.prototype.setDoB = function(doB){
    this.doB = doB;
}
Candidate.prototype.getDoB =function(){
    return this.doB;
}
Candidate.prototype.setMath = function(math){
    this.math = math;
}
Candidate.prototype.getMath =function(){
    return this.math;
}
Candidate.prototype.setEnglish = function(english){
    this.english = english;
}
Candidate.prototype.getEnglish =function(){
    return this.english;
}
Candidate.prototype.setLiterature = function(literature){
    this.literature = literature;
}
Candidate.prototype.getLiterature =function(){
    return this.literature;
}

Candidate.prototype.getTongDiem = function(){
    return this.math + this.english + this.literature;
}

var numberOfStudent = Number(prompt('Nhập số học sinh:'));
var listOfStudents = [numberOfStudent];

for(var i = 0; i<numberOfStudent;i++){
listOfStudents[i] = new Candidate();
listOfStudents[i].setCNo (prompt(`Nhập mã thí sinh ${i+1}:`));
listOfStudents[i].setCName (prompt(`Nhập tên thí sinh ${i+1}: `));
listOfStudents[i].setDoB ((prompt(`Nhập ngày sinh của thí sinh ${i+1}:`)));
listOfStudents[i].setMath (Number(prompt('Nhập điểm toán: ')));
listOfStudents[i].setEnglish (Number(prompt('Nhập điểm tiếng anh: ')));
listOfStudents[i].setLiterature (Number(prompt('Nhập điểm văn: ')));
}
// In ra những thí sinh có tổng điểm trên 15
console.log('Những thí sinh có tổng điểm >15 là:');
for( var i = 0; i<numberOfStudent;i++){
    if(listOfStudents[i].getTongDiem() > 15){
        //In Thông tin từng thí sinh        
        console.log(`Thí sinh thứ ${i+1}:
        - Tên: ${listOfStudents[i].getCName()}
        - Mã số: ${listOfStudents[i].getCNo()}
        - Ngày sinh:${listOfStudents[i].getDoB()}
        - Điểm Toán: ${listOfStudents[i].getMath()}
        - Điểm Tiếng Anh: ${listOfStudents[i].getEnglish()}
        - Điểm Ngữ Văn: ${listOfStudents[i].getLiterature()} `)
    }
}



