public class Demo{
    String name;
    int age;

    public Demo(string name,int age){
        this.name=name;
        this.age=age;
    }
    display(){
        System.out.println(this.name);
        System.out.println(this.age);
    }
    public static void main(String[] args){
        Demo obj=new Demo("Apurva",20);
        System.out.println(obj.name);
        System.out.println(obj.age);
    }
}