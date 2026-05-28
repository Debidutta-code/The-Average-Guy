'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, Edit, Trash2, Coffee, Loader2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { apiFetch } from "@/lib/api";
import { toast } from "sonner";

interface MenuItem {
  _id: string;
  title: string;
  price: number;
  category: string;
  isVeg: boolean;
  description?: string;
  image?: string;
}

export default function AdminMenuPage() {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);

  const [formData, setFormData] = useState({
    title: '',
    price: '',
    category: '',
    isVeg: true,
    description: '',
    image: ''
  });

  const fetchMenu = useCallback(async () => {
    try {
      const response = await apiFetch('/menu');
      setItems(response.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch menu");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchMenu();
    }, 0);
    return () => clearTimeout(timer);
  }, [fetchMenu]);

  const handleSave = async () => {
    setSaving(true);
    try {
      if (editingItem) {
        await apiFetch(`/menu/${editingItem._id}`, {
          method: 'PATCH',
          body: JSON.stringify(formData)
        });
        toast.success("Item updated");
      } else {
        await apiFetch('/menu', {
          method: 'POST',
          body: JSON.stringify(formData)
        });
        toast.success("Item added");
      }
      fetchMenu();
      setIsDialogOpen(false);
      resetForm();
    } catch (error) {
      console.error(error);
      toast.error("Failed to save item");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure?")) return;
    try {
      await apiFetch(`/menu/${id}`, { method: 'DELETE' });
      toast.success("Item deleted");
      fetchMenu();
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete item");
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      price: '',
      category: '',
      isVeg: true,
      description: '',
      image: ''
    });
    setEditingItem(null);
  };

  const handleEdit = (item: MenuItem) => {
    setEditingItem(item);
    setFormData({
      title: item.title,
      price: item.price.toString(),
      category: item.category,
      isVeg: item.isVeg,
      description: item.description || '',
      image: item.image || ''
    });
    setIsDialogOpen(true);
  };

  return (
    <div className="space-y-10">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black tracking-tighter uppercase">Menu Management</h1>
          <p className="text-white/40">Manage your cafe{"'"}s food and drink offerings.</p>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={(open) => {
          setIsDialogOpen(open);
          if (!open) resetForm();
        }}>
          <DialogTrigger render={
            <Button className="bg-primary hover:bg-white hover:text-black font-bold">
              <Plus size={18} className="mr-2" /> Add Item
            </Button>
          } />
          <DialogContent className="bg-zinc-900 border-white/5 text-foreground sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">{editingItem ? 'Edit Menu Item' : 'Add Menu Item'}</DialogTitle>
            </DialogHeader>
            <div className="grid gap-6 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Item Name</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    placeholder="e.g. Cappuccino"
                    className="bg-black/50 border-white/10"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="price">Price (₹)</Label>
                  <Input
                    id="price"
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData({...formData, price: e.target.value})}
                    placeholder="250"
                    className="bg-black/50 border-white/10"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Input
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    placeholder="coffee, food, dessert"
                    className="bg-black/50 border-white/10"
                  />
                </div>
                <div className="flex items-center space-x-2 pt-10">
                  <input
                    type="checkbox"
                    id="veg"
                    checked={formData.isVeg}
                    onChange={(e) => setFormData({...formData, isVeg: e.target.checked})}
                    className="w-5 h-5 accent-primary"
                  />
                  <Label htmlFor="veg">Vegetarian</Label>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="desc">Description</Label>
                <Textarea
                  id="desc"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Ingredients, taste profile..."
                  className="bg-black/50 border-white/10"
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                onClick={handleSave}
                disabled={saving}
                className="bg-primary w-full h-12 font-bold"
              >
                {saving ? <Loader2 className="animate-spin" /> : editingItem ? 'Update Item' : 'Add to Menu'}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {loading ? (
        <div className="flex justify-center py-20">
          <Loader2 className="animate-spin text-primary" size={40} />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.length === 0 && <p className="text-white/20 text-center py-20 w-full col-span-2">No menu items found.</p>}
          {items.map((item) => (
            <Card key={item._id} className="bg-zinc-900 border-white/5 p-6 text-foreground hover:border-white/50 transition-all">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center text-primary">
                  <Coffee size={24} />
                </div>
                <div className="flex gap-2">
                  <Button onClick={() => handleEdit(item)} variant="ghost" size="icon" className="h-8 w-8 text-white/40 hover:text-foreground hover:bg-white/5">
                    <Edit size={16} />
                  </Button>
                  <Button onClick={() => handleDelete(item._id)} variant="ghost" size="icon" className="h-8 w-8 text-white/40 hover:text-red-500 hover:bg-red-500/10">
                    <Trash2 size={16} />
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <Badge variant={item.isVeg ? "outline" : "destructive"} className={item.isVeg ? "border-green-500 text-green-500" : "bg-red-500/10 text-red-500 border-0"}>
                    {item.isVeg ? "VEG" : "NON-VEG"}
                  </Badge>
                </div>
                <p className="text-white/40 text-sm capitalize">{item.category}</p>
                <p className="text-2xl font-black text-primary">₹{item.price}</p>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
