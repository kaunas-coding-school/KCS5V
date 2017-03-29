/**
 * Created by Baltramiejus Jakstys on 3/23/2017.
 */
function manoFunkcija(kintamasis) {
    document.getElementById('elementas1').innerHTML = '' + kintamasis;
}

function BaltramiejusController(){
    var vm = this;
    vm.title = 'Antraštė';
    vm.vardas = 'Baltramiejus';
    vm.pavarde = 'Jakštys';

    vm.masyvas = [
        {
            "_id": "58dbe08242625eeb7e04a549",
            "index": 0,
            "age": 20,
            "name": "Doris Mcconnell",
            "gender": "female"
        },
        {
            "_id": "58dbe0824bf80b47882646d6",
            "index": 1,
            "age": 36,
            "name": "Claudette Carey",
            "gender": "female"
        },
        {
            "_id": "58dbe0824a373e4bb43a7058",
            "index": 2,
            "age": 39,
            "name": "Theresa Chase",
            "gender": "female"
        },
        {
            "_id": "58dbe082b833a6d346e6de2f",
            "index": 3,
            "age": 29,
            "name": "Janet Stafford",
            "gender": "female"
        },
        {
            "_id": "58dbe082b5c388a0ede96b34",
            "index": 4,
            "age": 26,
            "name": "Hale Jacobs",
            "gender": "male"
        }
    ];
}