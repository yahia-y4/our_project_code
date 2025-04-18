const fs = require('fs');
const { parse } = require('path/posix');








window.addEventListener('DOMContentLoaded', () => { 

    class DataMC {
        constructor() {
            this.all_items_in_storage__ary = []
            this.all_sales_record__ary=[]
            //fatora
            this.buy_fatora_ary=[]
            this.num_of_buy_fatora = 0;
            
                
                
    
            this.load_all_files()
        }
    
        load_all_files() {
            
            this.load_all_items_in_storage__file()
            this.load_all_sales_record__file()
    
        }
    
        load_all_items_in_storage__file() {
    
            try {
                this.handel_all_items__ary()
                console.log("تمت القراءة من ملف all_item_in_storage")
            } catch {
                try {
                    let data = []
                    fs.writeFileSync('./Data/all_items_in_storage.json', JSON.stringify(data), 'utf-8')
                    this.handel_all_items__ary()
                    console.log("لم يتم العثور على ملف  all_items_in_storage.json (تم انشاؤه)")
                } catch {
                    console.log("خطا في تحميل الملف all_items_in_storage.json")
                }
            }
    
    
        }
        load_all_sales_record__file(){
            try {
                this.handel_all_record_sales__ary()
                console.log("تمت القراءة من ملف all_record_sales")
            } catch {
                try {
                    let data = []
                    fs.writeFileSync('./Data/all_record_sales.json', JSON.stringify(data), 'utf-8')
                    this.handel_all_record_sales__ary()
                    console.log("لم يتم العثور على ملف  all_record_sales.json (تم انشاؤه)")
                } catch {
                    console.log("خطا في تحميل الملف all_record_sales.json")
                }
            }
    
    
        }
      
        handel_all_items__ary() { // هذه الدالة تقوم بتحميل البيانات من الملف الى السجل او المتغير الخاص به 
            this.all_items_in_storage__ary = this.gave_me_data_from('./Data/all_items_in_storage.json')
        }
        handel_all_record_sales__ary(){
            this.all_sales_record__ary = this.gave_me_data_from('./Data/all_record_sales.json')
        }
    
        gave_me_data_from(file_path) {
                const data = fs.readFileSync(file_path, 'utf-8')
                return JSON.parse(data)
    
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
    
        add_item_to_buy_fatora() {
            // هذه البيانات يتم احظارها من صفحة html,   عن طريق وسوم ال input 
            let name =""
            let co_name = ""
            let num = ""
            let price = 1
            let profit = 0.1
            let code = "111"
            let end_date =""
            
    
            if (name) {
                if (co_name) {
                            if ((+num) > 0) {
                                if ((+price) > 0) {
                                    if ((+profit) >= 0) {
                                        // عند تحقق كل الشروط السابقة تبدأ عملية الاضافة من هنا 
        
                                        if (Array.isArray(Data_M_C.all_items_in_storage__ary)) {  // التحقق من هل السجل مصفوفة لكي يقبل الاضافة 
        
                                            Data_M_C.all_items_in_storage__ary.push({
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
                                            Data_M_C.fatora_ary[0]["items"].push({
                                                "name": name,
                                                "co_name": co_name,
                                                "num": num,
                                            })
                                            this.show_in_fatora()
        
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
    
                } else {
                    console.log("خانة اسم الشركة فارغة")
                }
    
            } else {
                console.log("خانة الاسم فارغة ")
            }
    
        }
        
        del_item_from_buy_fatora(i){
    
        }
        add_buy_fatora(){
        let name = document.getElementById('mored').value
        let date = document.getElementById('date').value
        Data_M_C.fatora_ary[0].info.name=name
        Data_M_C.fatora_ary[0].info.date=date
        document.getElementById('show_f').style.display='block'
        this.show_fatora()

        }
 
       start_buy_fatora(){
    
    
       }
       cancel_buy_fatora(){
    
       }
       
    
    show_in_fatora(){
    
    
    }
        
        sell_item_from_storage(){ // بيع عنصر بدون فاتورة 
            let name ="yahia";
            let co_name ="yahia";     // احضار البيانات من صفحة البيع من اوسمة الادخال 
            let num =2;
            let code ="111";
            let finall_price =1.5;
    
    
            // فحص بعض الشروط للتاكد من عدم حصول خطاء منطقي 
            if(name){
                if(co_name){
                    if(code){
                        if((+num) > 0){
                            if((+finall_price) > 0){
                                if(Array.isArray(Data_M_C.all_items_in_storage__ary)){
    
    
    
    
                                    // البحث عن العنصر داخل السجل 
                                    for(let i = 0; i< Data_M_C.all_items_in_storage__ary.length;i++){
                                        if(Data_M_C.all_items_in_storage__ary[i]["name"] == name && Data_M_C.all_items_in_storage__ary[i]["co_name"] == co_name || Data_M_C.all_items_in_storage__ary[i]["code"] == code){
    
                                            // عند العثور على العنصر المطلوب نفحص عدد القطع الخاصه به 
                                            if((+ Data_M_C.all_items_in_storage__ary[i]["num"]) >= (+num)){
                                                // هنا ستتم عملية البيع 
    
                                                // انقاص عدد القطع المباعة من السجل 
                                                (Data_M_C.all_items_in_storage__ary[i]["num"]) -= (+num)
    
                                                // حفظ السجل بعد التعديل في الملف الخاص به
                                                Data_M_C.geve_data_toSave_in('./Data/all_items_in_storage.json', Data_M_C.all_items_in_storage__ary)
                                                Data_M_C.handel_all_items__ary() // اعادة تحميل بيانات السجل للتاكد من ان البيانات الموجودة في الملف نفسها موجودة في السجل المؤقت
                                                console.log("تم البيع")
                                                Record_M_C.add_to_all_sales_record(name,co_name,code,num,
                                                    Data_M_C.all_items_in_storage__ary[i]["class_"],
                                                    Data_M_C.all_items_in_storage__ary[i]["price"],
                                                    Data_M_C.all_items_in_storage__ary[i]["profit"],
                                                    Data_M_C.all_items_in_storage__ary[i]["finall_price"])
                                               
    
                                                // نهاية دالة البيع الفردي 
                                                
                                
                                                
                                            }else{
                                                console.log("عدد القطع في المخزن غير كافي")
                                               
                                                return
                                            }
    
                                            return 
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
     class RecordMC{
        constructor(){
    
        }
        add_to_all_sales_record(name,co_name,code,num,class_,price,profit,finall_price){
            if(Array.isArray(Data_M_C.all_sales_record__ary)){
                Data_M_C.all_sales_record__ary.push({
                    "name":name,
                    "co_name":co_name,
                    "num":num,
                    "price":price,
                    "profit":profit,
                    "code":code,
                    "class_":class_,
                    "finall_price_to_one":finall_price,
                    "finall_price_to_all":(+finall_price)*(+num),
                    "date":"2025/4/16",
                    "day":"الاربعاء",
                    "hour":"12 : 30  pm"
                })
    
                Data_M_C.geve_data_toSave_in('./Data/all_record_sales.json',Data_M_C.all_sales_record__ary)
                Data_M_C.handel_all_record_sales__ary()
                console.log("تمت اضافة هذ العنصر المباع الى سجل المبعات الكامل ")
    
    
            }else{
                console.log("خطاء سجل المبيعات الكامل ليس مصفوفة")
            }
    
        }
     }
    
     class Events{
        constructor(){
            this.set_event()
    
        }
        set_event(){
      
        }
     }

     // *************************************************//
   
    const Data_M_C = new DataMC()
    const Record_M_C=new RecordMC()
    const Storage_M_C = new StorageMC()
    const Events_M_C =new Events()

})



