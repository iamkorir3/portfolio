//importing packages (Applet)
import java.applet.Applet;
import java.awt.Graphics;

public class MyApplet extends Applet {

    @Override
    public void init() {
        setBackground(java.awt.Color.WHITE);
    }

    @Override
    public void paint(Graphics g) {

        g.drawString("Welcome to Java Applets!", 50, 50);
        g.drawRect(30, 30, 150, 50);
    }
}

