import java.util.*;

public class KthLargestElement {
    public static ArrayList<Integer> kLargest(int[] arr, int k) {
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();

        for (int i = 0; i < k; i++) {
            minHeap.add(arr[i]);
        }

        for (int i = k; i < arr.length; i++) {
            if (arr[i] > minHeap.peek()) {
                minHeap.poll();
                minHeap.add(arr[i]);
            }
        }

        ArrayList<Integer> result = new ArrayList<>();
        while (!minHeap.isEmpty()) {
            result.add(minHeap.poll());
        }

        Collections.reverse(result);

        return result;
    }

    public static void main(String[] args) {
        int[] arr = { 12, 5, 787, 1, 23 };
        int k = 2;

        ArrayList<Integer> result = kLargest(arr, k);
        System.out.println("Top " + k + " largest elements: " + result);
    }
}
