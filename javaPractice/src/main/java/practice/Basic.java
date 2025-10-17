package practice;

public class Basic {
    public static int amount = 1;

    public static class MyThread implements Runnable {
        public void run() {
            amount++;
            System.out.println(Thread.currentThread().getId() + " amount: " + amount);
        }
    }

    public static void main(String[] args) {
        System.out.println(amount);

        MyThread myThread1 = new MyThread();
        MyThread myThread2 = new MyThread();

        // Wrap them in Thread objects
        Thread thread1 = new Thread(myThread1);
        Thread thread2 = new Thread(myThread2);

        // Start both threads
        thread1.start();
        thread2.start();

        // Wait for both threads to finish
        try {
            thread1.join();
            thread2.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        // Final value of amount after both threads have run
        System.out.println("After threads: " + amount);
    }
}
