abstract class BankAccount {

    private int accountNumber;
    private String accountHolderName;
    protected double balance;

    public BankAccount(int accountNumber, String accountHolderName, double balance) {

        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = balance;

    }

    public void deposit(double amount) {

        balance += amount;

    }

    abstract void calculateInterest();

    public void display() {

        System.out.println("Account Number: " + accountNumber);
        System.out.println("Account Holder: " + accountHolderName);
        System.out.println("Balance: " + balance);

    }

}

class SavingsAccount extends BankAccount {

    public SavingsAccount(int accNo, String name, double balance) {

        super(accNo, name, balance);

    }

    void calculateInterest() {

        double interest = balance * 0.05;

        System.out.println("Savings Interest: " + interest);

    }

}

class CurrentAccount extends BankAccount {

    public CurrentAccount(int accNo, String name, double balance) {

        super(accNo, name, balance);

    }

    void calculateInterest() {

        double interest = balance * 0.02;

        System.out.println("Current Interest: " + interest);

    }

}

public class exp10 {

    public static void main(String[] args) {

        SavingsAccount s = new SavingsAccount(101, "Rahul", 50000);

        s.deposit(5000);

        s.display();

        s.calculateInterest();

    }

}