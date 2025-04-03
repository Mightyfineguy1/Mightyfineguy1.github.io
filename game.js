import javax.swing.*;
import java.awt.*;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;

public class Game extends JPanel implements KeyListener, Runnable {
    private int x = 100, y = 100; // Player position
    private final int SPEED = 5;
    private boolean running = true;

    public Game() {
        JFrame frame = new JFrame("Simple Java Game");
        frame.setSize(500, 500);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.add(this);
        frame.addKeyListener(this);
        frame.setVisible(true);
        new Thread(this).start(); // Start game loop
    }

    @Override
    public void paintComponent(Graphics g) {
        super.paintComponent(g);
        g.setColor(Color.BLUE);
        g.fillRect(x, y, 50, 50); // Draw player (blue square)
    }

    @Override
    public void run() {
        while (running) {
            repaint(); // Redraw screen
            try { Thread.sleep(16); } catch (InterruptedException e) { e.printStackTrace(); } // 60 FPS
        }
    }

    @Override
    public void keyPressed(KeyEvent e) {
        if (e.getKeyCode() == KeyEvent.VK_LEFT)  x -= SPEED;
        if (e.getKeyCode() == KeyEvent.VK_RIGHT) x += SPEED;
        if (e.getKeyCode() == KeyEvent.VK_UP)    y -= SPEED;
        if (e.getKeyCode() == KeyEvent.VK_DOWN)  y += SPEED;
    }

    @Override
    public void keyReleased(KeyEvent e) {}
    @Override
    public void keyTyped(KeyEvent e) {}

    public static void main(String[] args) {
        new Game();
    }
}
