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

    load_all_items_in_storage_file() {

        try {
            this.handel_all_items_ary()
            console.log("تمت القراءة من ملف all_item_in_storage")
        } catch {
            try {
                let data = []
                fs.writeFileSync('./Data/all_items_in_storage.json', JSON.stringify(data), 'utf-8')
                this.handel_all_items_ary()
                console.log("لم يتم العثور على ملف  all_items_in_storage.json (تم انشاؤه)")
            } catch {
                console.log("خطا في تحميل الملف all_items_in_storage.json")
            }
        }


    }
    handel_all_items_ary() { // هذه الدالة تقوم بتحميل البيانات من الملف الى السجل او المتغير الخاص به 
        this.all_items_in_storage_ary = this.gave_me_data_from('./Data/all_items_in_storage.json')
    }

    gave_me_data_from(file_path) {
        try {
            const data = fs.readFileSync(file_path, 'utf-8')
            return JSON.parse(data)

        } catch {
            console.error("خطاء في قراءة الملف ذو المسار المعطاة من قبلك ", file_path)

        }
    }

    geve_data_toSave_in(file_path, data) {
        try {
            fs.accessSync(file_path, fs.constants.F_OK);
            fs.writeFileSync(file_path, JSON.stringify(data), 'utf-8')
            console.log("تم الحفظ في ", file_path)

        } catch {
            console.error(" خطاء في عملية الحغظ للمسار ", file_path)

        }

    }
}

class StorageMC {
    constructor() {

    }

    add_item_to_storage() {
        // هذه البيانات يتم احظارها من صفحة html,   عن طريق وسوم ال input 
        let name = "yahia"
        let co_name = "yahia"
        let num = 1
        let price = 1
        let profit = 0.1
        let class_ = "yyyy"
        let code = "111"
        let note = "eeeee"

        if (name) {
            if (co_name) {
                if (class_) {
                    if(code){
                        if ((+num) > 0) {
                            if ((+price) > 0) {
                                if ((+profit) >= 0) {
                                    // عند تحقق كل الشروط السابقة تبدأ عملية الاضافة من هنا 
    
                                    if (Array.isArray(Data_M_C.all_items_in_storage_ary)) {  // التحقق من هل السجل مصفوفة لكي يقبل الاضافة 
    
                                        Data_M_C.all_items_in_storage_ary.push({
                                            // اضافة البيانات الى السجل المؤقت 
    
                                            "name": name,
                                            "co_name": co_name,
                                            "num": num,
                                            "price": price,
                                            "profit": profit,
                                            "finall_price": (+price) + ((+price) * (+profit)), // هذا هو سعر المبيع يحسب بشكل تلقائي كما نرى
                                            "class_": class_,
                                            "code": code,
                                            "note": note,
                                            "add_date": "2025/4/15" // لم يتم بناء دالة جلب التاريخ بعد 
    
                                        }
                                        )
    
                                        // بعد الاضافة الى السجل المؤقت نحفظ السجل في الملف الخاص به 
                                        Data_M_C.geve_data_toSave_in('./Data/all_items_in_storage.json', Data_M_C.all_items_in_storage_ary)
                                        // بعد الحفظ يجب اعادة تحميل البيانات من الملف الى السجل المؤقت هذا سيسرع التعامل معه لانه يكون محفوظ في الرام 
                                        Data_M_C.handel_all_items_ary()
    
                                        console.log("تمت الاضافة بنجاح ")
    
                                    } else {
                                        console.error("خطاء السجل ليس مصفوفة ")
                                    }
    
    
    
    
    
                                } else {
                                    console.log("لا يمكن ان تكون نسبة الربح عدد سالب ")
                                }
    
                            } else {
                                console.log("لا يمكن ان يكون السعر قيمة معدومة او سالبة")
                            }
    
                        } else {
                            console.log("لا يمكن اضافة عنصر ذو عدد قطع معدومة او سالبة")
                        }

                    }else{
                        console.log("خانة الكود فارغة")
                    }
                   

                } else {
                    console.log("خانة الصنف فارغة")
                }

            } else {
                console.log("خانة اسم الشركة فارغة")
            }

        } else {
            console.log("خانة الاسم فارغة ")
        }

    }
    sell_item_from_storage(){ // بيع عنصر بدون فاتورة 
        let name ="yahia";
        let co_name ="yahia";     // احضار البيانات من صفحة البيع من اوسمة الادخال 
        let num =1;
        let code ="111";
        let finall_price =1.5;


        // فحص بعض الشروط للتاكد من عدم حصول خطاء منطقي 
        if(name){
            if(co_name){
                if(code){
                    if((+num) > 0){
                        if((+finall_price) > 0){
                            if(Array.isArray(Data_M_C.all_items_in_storage_ary)){




                                // البحث عن العنصر داخل السجل 
                                for(let i = 0; i< Data_M_C.all_items_in_storage_ary.length;i++){
                                    if(Data_M_C.all_items_in_storage_ary[i]["name"] == name && Data_M_C.all_items_in_storage_ary[i]["co_name"] == co_name || Data_M_C.all_items_in_storage_ary[i]["code"] == code){

                                        // عند العثور على العنصر المطلوب نفحص عدد القطع الخاصه به 
                                        if((+ Data_M_C.all_items_in_storage_ary[i]["num"]) >= (+num)){
                                            // هنا ستتم عملية البيع 

                                            // انقاص عدد القطع المباعة من السجل 
                                            (Data_M_C.all_items_in_storage_ary[i]["num"]) -= (+num)

                                            // حفظ السجل بعد التعديل في الملف الخاص به
                                            Data_M_C.geve_data_toSave_in('./Data/all_items_in_storage.json', Data_M_C.all_items_in_storage_ary)
                                            Data_M_C.handel_all_items_ary() // اعادة تحميل بيانات السجل للتاكد من ان البيانات الموجودة في الملف نفسها موجودة في السجل المؤقت
                                            console.log("تم البيع")
                                           

                                            // نهاية دالة البيع الفردي 
                                            
                            
                                            
                                        }else{
                                            console.log("عدد القطع في المخزن غير كافي")
                                           
                                            return
                                        }

                                        break
                                    }
                                }
                                console.log("العنصر غير موجود")
                                return
                                

                            }else{
                                console.log("خطاء السجل ليس مصفوفة ")
                                
                            }

                        }else{
                            console.log("لا يمكن ان يكون سعر المبيع معدوم او قيمة سالبة")
                            
                        }

                    }else{
                        console.log("لا يمكن ان تكون القطع معدومة او عدد سالب")
                        
                    }

                }else{console.log("لا يمكن ان تكون خانة الكود فارغة ")}
                

            }else{
                console.log("لا يمكن ان تكون خانة اسم الشركة فارغة")
            }

        }else{
            console.log("لا يمكن ان تكون خانة الاسم فارغة")
        }



    }

}

// *************************************************//

const Data_M_C = new DataMC()


window.addEventListener('DOMContentLoaded', () => {  // هذا الحدث يعني كل شيء داخل الاقواس سيتم تنفيذه بعد تحميل صفحة html, 
    // ستكون هنا جميع الكلاسات التي تحوي على دوال لها اتصال مباشر مع صفحة html,
    const Storage_M_C = new StorageMC()
    // Storage_M_C.add_item_to_storage() // سيتم استدعاء دالة الاضافة عن طريق حدث النقر على ايقونة الاضافة وغير متوفرة الى الان بانتظار الفرونت اند .....

    Storage_M_C.sell_item_from_storage() // سيتم استدعاء الدالة عند النقر على ايقونة البيع بعد ملىء حقول البيع 


})



