'use client';

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, Edit, Trash2, Coffee, Loader2, Search, Filter, ChevronRight } from 'lucide-react';
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
import { motion, AnimatePresence } from 'framer-motion';

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
  const [searchTerm, setSearchTerm] = useState('');

  const [formData, setFormData] = useState({
    title: '',
    price: '',
    category: '',
    isVeg: true,
    description: '',
    image: ''
  });

  const fetchMenu = async () => {
    try {
      const response = await apiFetch('/menu');
      setItems(response.data);
    } catch {
      toast.error("Failed to fetch menu");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let mounted = true;
    const loadData = async () => {
      if (mounted) {
        await fetchMenu();
      }
    };
    loadData();
    return () => { mounted = false; };
  }, []);

  const handleSave = async () => {
    setSaving(true);
    try {
      if (editingItem) {
        await apiFetch(`/menu/${editingItem._id}`, {
          method: 'PATCH',
          body: JSON.stringify(formData)
        });
        toast.success("Item updated successfully");
      } else {
        await apiFetch('/menu', {
          method: 'POST',
          body: JSON.stringify(formData)
        });
        toast.success("New item added to menu");
      }
      fetchMenu();
      setIsDialogOpen(false);
      resetForm();
    } catch {
      toast.error("Failed to save item");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to remove this item?")) return;
    try {
      await apiFetch(`/menu/${id}`, { method: 'DELETE' });
      toast.success("Item removed from menu");
      fetchMenu();
    } catch {
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

  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-[10px] mb-2 block">Culinary Catalog</span>
          <h1 className="text-5xl font-serif text-white uppercase tracking-tight">Menu <span className="text-brand-blue">Management</span></h1>
          <p className="text-white/40 mt-2 font-light italic">Curate your rooftop Gastronomy and Mediterranean specials.</p>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
           <div className="bg-white/5 border border-white/10 rounded-sm px-4 py-2 flex items-center gap-3 flex-grow md:w-64">
              <Search size={16} className="text-white/30" />
              <input
                type="text"
                placeholder="Search menu items..."
                className="bg-transparent border-none outline-none text-sm w-full placeholder:text-white/20"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
           </div>

           <Dialog open={isDialogOpen} onOpenChange={(open) => {
             setIsDialogOpen(open);
             if (!open) resetForm();
           }}>
             <DialogTrigger>
               <div className="bg-brand-blue hover:bg-brand-gold text-white font-bold h-10 px-6 rounded-sm uppercase text-[10px] tracking-widest transition-all flex items-center justify-center cursor-pointer">
                 <Plus size={16} className="mr-2" /> Add Item
               </div>
             </DialogTrigger>
             <DialogContent className="bg-[#030D1B] border-white/10 text-white sm:max-w-[600px] font-sans">
               <DialogHeader className="pb-6 border-b border-white/5">
                 <DialogTitle className="text-3xl font-serif font-light uppercase">{editingItem ? 'Edit' : 'New'} <span className="text-brand-blue">Menu Item</span></DialogTitle>
               </DialogHeader>
               <div className="grid gap-8 py-8">
                 <div className="grid grid-cols-2 gap-6">
                   <div className="space-y-3">
                     <Label htmlFor="title" className="text-[10px] uppercase tracking-widest font-bold text-white/40">Item Name</Label>
                     <Input
                       id="title"
                       value={formData.title}
                       onChange={(e) => setFormData({...formData, title: e.target.value})}
                       placeholder="e.g. Santorini Mezze"
                       className="bg-white/5 border-white/10 rounded-sm h-12 focus:border-brand-blue/50"
                     />
                   </div>
                   <div className="space-y-3">
                     <Label htmlFor="price" className="text-[10px] uppercase tracking-widest font-bold text-white/40">Price (₹)</Label>
                     <Input
                       id="price"
                       type="number"
                       value={formData.price}
                       onChange={(e) => setFormData({...formData, price: e.target.value})}
                       placeholder="450"
                       className="bg-white/5 border-white/10 rounded-sm h-12 focus:border-brand-blue/50"
                     />
                   </div>
                 </div>
                 <div className="grid grid-cols-2 gap-6">
                   <div className="space-y-3">
                     <Label htmlFor="category" className="text-[10px] uppercase tracking-widest font-bold text-white/40">Category</Label>
                     <Input
                       id="category"
                       value={formData.category}
                       onChange={(e) => setFormData({...formData, category: e.target.value})}
                       placeholder="Greek, Pizza, Mains..."
                       className="bg-white/5 border-white/10 rounded-sm h-12 focus:border-brand-blue/50"
                     />
                   </div>
                   <div className="flex items-center space-x-3 pt-9">
                     <input
                       type="checkbox"
                       id="veg"
                       checked={formData.isVeg}
                       onChange={(e) => setFormData({...formData, isVeg: e.target.checked})}
                       className="w-5 h-5 accent-brand-gold rounded-sm cursor-pointer"
                     />
                     <Label htmlFor="veg" className="text-sm font-medium cursor-pointer">Vegetarian Item</Label>
                   </div>
                 </div>
                 <div className="space-y-3">
                   <Label htmlFor="desc" className="text-[10px] uppercase tracking-widest font-bold text-white/40">Description</Label>
                   <Textarea
                     id="desc"
                     value={formData.description}
                     onChange={(e) => setFormData({...formData, description: e.target.value})}
                     placeholder="Share the story or ingredients of this dish..."
                     className="bg-white/5 border-white/10 rounded-sm min-h-[100px] focus:border-brand-blue/50"
                   />
                 </div>
               </div>
               <DialogFooter className="pt-6 border-t border-white/5">
                 <Button
                   onClick={handleSave}
                   disabled={saving}
                   className="bg-brand-gold hover:bg-white hover:text-black w-full h-14 font-bold uppercase tracking-[0.2em] transition-all"
                 >
                   {saving ? <Loader2 className="animate-spin" /> : editingItem ? 'Confirm Update' : 'Save Item to Menu'}
                 </Button>
               </DialogFooter>
             </DialogContent>
           </Dialog>
        </div>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-32 gap-4">
          <Loader2 className="animate-spin text-brand-gold" size={48} strokeWidth={1} />
          <p className="text-[10px] uppercase font-bold tracking-widest text-white/20">Loading Menu...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredItems.length === 0 && (
             <div className="text-center py-32 border border-dashed border-white/5 rounded-sm lg:col-span-2">
                <p className="text-white/20 text-sm italic font-light">No culinary items found in this section.</p>
             </div>
          )}

          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, i) => (
              <motion.div
                key={item._id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
              >
                <Card className="bg-[#030D1B] border-white/5 p-8 text-white hover:border-brand-blue/30 transition-all group relative overflow-hidden flex flex-col md:flex-row gap-8">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 -mr-16 -mt-16 rounded-full blur-3xl group-hover:bg-brand-blue/10 transition-colors" />

                  {/* Item Image Placeholder / Icon */}
                  <div className="w-full md:w-40 aspect-square rounded-sm bg-white/5 border border-white/10 flex items-center justify-center relative overflow-hidden shrink-0">
                     {item.image ? (
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                     ) : (
                        <Coffee size={40} className="text-white/10 group-hover:text-brand-blue transition-colors" />
                     )}
                     <div className="absolute top-3 left-3">
                        <div className={`w-3 h-3 rounded-full ${item.isVeg ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]' : 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]'}`} />
                     </div>
                  </div>

                  <div className="flex-grow flex flex-col justify-between">
                    <div>
                       <div className="flex justify-between items-start mb-2">
                          <div>
                            <span className="text-[10px] font-bold text-brand-gold uppercase tracking-widest mb-1 block">{item.category}</span>
                            <h3 className="text-2xl font-serif text-white uppercase group-hover:text-brand-blue transition-colors">{item.title}</h3>
                          </div>
                          <div className="flex gap-1">
                             <button onClick={() => handleEdit(item)} className="p-2 text-white/20 hover:text-white transition-colors"><Edit size={16} /></button>
                             <button onClick={() => handleDelete(item._id)} className="p-2 text-white/20 hover:text-red-500 transition-colors"><Trash2 size={16} /></button>
                          </div>
                       </div>
                       <p className="text-white/30 text-sm font-light italic line-clamp-2 mt-2">{item.description || "No description provided for this item."}</p>
                    </div>

                    <div className="mt-8 flex justify-between items-end border-t border-white/5 pt-4">
                       <div className="flex items-center gap-1">
                          <span className="text-brand-gold text-sm font-serif">₹</span>
                          <span className="text-3xl font-serif text-white tracking-tighter">{item.price}</span>
                       </div>
                       <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/20 hover:text-brand-gold transition-colors">
                          Details <ChevronRight size={14} />
                       </button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
