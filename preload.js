const fs = require('fs');
const { parse } = require('path/posix');


class DataMC {
    constructor() {
        this.all_items_in_storage_ary = []
        this.load_all_files()

    }

    load_all_files() {
        this.load_all_items_in_storage_file()

    }

    load_all_items_in_storage_file(){
        
        try {
            const data = fs.readFileSync('./Data/all_items_in_storage.json', 'utf-8')
            this.all_items_in_storage_ary = JSON.parse(data)
            console.log("تمت القراءة من ملف all_item_in_storage")
        } catch {
            try {
                let data =[]
                fs.writeFileSync('./Data/all_items_in_storage.json',JSON.stringify(data), 'utf-8')
                console.log("لم يتم العثور على ملف  all_items_in_storage.json (تم انشاؤه)")
            } catch {
                console.log("خطا في تحميل الملف all_items_in_storage.json")
            }
        }


    }
}
function main(){
    const Data_M_C = new DataMC()





    window.addEventListener('DOMContentLoaded', () => {})
  
}
main()
