import java.io.*;
import java.lang.*;
import java.util.*;
import java.util.stream.*;


public class test {
    public static void main(String args[]){

        //Lists in java
        List<String> slist = new ArrayList<String>();
        slist.add("item 1");
        slist.add("item 2");
        for(String s: slist){
            System.out.println(s);
        }//List<Integer> i = new ArrayList<Integer>()
        //declaring Integer List using a Array list
        List<Integer> ilist = new ArrayList<Integer>();

        //adding elements in a ArrayList
        ilist.add(212);
        ilist.add(2434);
        //Updating the elements in the List
        ilist.set(1,2323);
        //Removing
        ilist.remove(1);
        //returns hash code value
        ilist.add(12);
        ilist.add(34);
        ilist.add(234);
        ilist.add(2342);
        ilist.add(123);

        int hash = ilist.hashCode();
        //contains return boolen value
        //.clear() removes every element from the list
        //.equals used to compare the elements of two lists.
        System.out.println(ilist + "hash = " + hash + ilist.contains(212) + ilist.contains(2)+" " +ilist.get(0));

        //Stream operations intermediate operations
        //Stream takes input from Collections , Arrays and I/O channels.
        //map is used to get the result according the function we want
        List square = ilist.stream().map(x->x*x).collect(Collectors.toList());
        System.out.println(square);
        //Filter is used for filtering the Stream
        List filter_names = slist.stream().filter(s->s.startsWith("i")).collect(Collectors.toList());
        System.out.println("Filtered names =" + filter_names);
        //Sorted is used for sorting the stream
        List sorted_ilist = ilist.stream().sorted().collect(Collectors.toList());
        System.out.println("Sorted list =" + sorted_ilist);
        //terminal operations
        //collect
        //forEach
        //reduce
        int even = ilist.stream().filter(x->x%2==0).reduce(0,(ans,i)->ans+i);
        System.out.println("reduecd =" + even);



        //SETS IN JAVA (unordered )
        Set<String> string_set = new HashSet<String>();
        string_set.add("name1");
        string_set.add("name2");

        System.out.println(string_set);
        //MAPS IN JAVA (maintains key and value pairs)
        Map<Integer,String> string_map = new HashMap<Integer,String>();
        string_map.put(1,"Sham");
        string_map.put(2,"Ram");
        System.out.println(string_map);

        for(int i: ilist){
            System.out.println(i);
        }
        ////////////////////////////////////////////////

        System.out.println("Hello");
        ///////////
        //String Builder in Java for mutable strings
        StringBuilder sb = new StringBuilder();
        //using append for appending strings
        sb.append("Mutable strings");

        //multithreading
        //changing the name
        //m_thread.setName("New one")
        Multithread m_thread = new Multithread();
        m_thread.start();

        //multithreading by runnable interface
        Thread t_run = new Thread(new threading_runnable());
        t_run.start();


        int a = 10;
        ////array Declaration
        int arrr[] = {1,2,4,5};
        //Pre and post increament

        System.out.println(a++ + --a);
        //right shift /2 left shift *
        int shiftr = a >> 1;
        int shiftl = a << 1;

        System.out.println("shifting "+ shiftr + " " + shiftl + " " );

        for(int i : arrr){
            System.out.println(i+ " ");
        }
        practice_encapsulation pe = new practice_encapsulation();
        message msg = new message();
        pe.setage(10);
        pe.setname("Raju");
        System.out.println(pe.getname() + " is " + pe.getage()+" years old");

        System.out.println(sb);
        msg.secret();

        int count=0;
        int arr[][]= new int[3][];
        arr[0] = new int[3];
        arr[1] = new int[4];
        arr[2] = new int[2];
        for(int i=0 ; i<arr.length; i++){
            for(int j=0;j<arr[i].length;j++){
                arr[i][j]=count++;
            }
        }
        for(int i=0 ; i<arr.length; i++){
            for(int j=0;j<arr[i].length;j++){
                System.out.print(arr[i][j]);
            }
            System.out.print("\n");
        }

    }


}

class practice_encapsulation{
    // for encapsulation make variables private and update their values with the  help
    // of public getter and setter methods
    private String name = "demo";
    private int age = 23;
    public String getname(){
        return name;
    }
    public int getage(){
        return age ;
    }
    public void setname(String str){
        this.name= str;
    }
    public void setage(int a){
        this.age=a;
    }
}
abstract class abs{
    //For abstraction make the class abstract first then make abstract method(i.e without the body)
    //inherit in the another class and define the body in that
    public abstract void secret();
}
class message extends  abs{
    public void secret(){
        System.out.println("Abstraction Implemented Successfully");
    }
}

class Multithread extends Thread {
    public void run(){
        try{
            System.out.println("Thread " + Thread.currentThread().getId() + " is running ");
        }
        catch(Exception e){
            System.out.println("Exception Caught");
        }
    }
}

class threading_runnable implements Runnable{
    public void run(){
        try{
            System.out.println("Thread by runnable interface =" + Thread.currentThread().getId() + "is running ");
        }
        catch(Exception e){
            System.out.println("Exception caught");
        }
    }
}



